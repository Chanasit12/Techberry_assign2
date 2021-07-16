import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
const day = require("dayjs");
function Content() {
    const [sans, setSans] = useState(false);
    let [data, setData] = useState([]);
    let [url,setUrl] = useState("https://tbapimgw01.beebuddy.net/FWD_OPFrontend_v3/1.0/getScanList");
    const useStyles = makeStyles((theme) => ({
        header: {
            margin: "1% 0% 1% 2%",
            color: "#000099",
            fontFamily: "Sukhumvit",
        },
        table: {
            height: '80vh',
            width: '70wv',
            marginLeft: "2%",
            marginRight: "2%",
            "& .id": {
                marginLeft: "20px",
                fontWeight: "500",
            },
            "& .data1": {
                textDecoration: "underline",
                color: "rgba(96,182,221,255)",
            },
            "& .data2": {
                marginLeft: "10px"
            },
            background: "white",
            fontFamily: "Sukhumvit",
        },
    }));
    const classes = useStyles();
    useEffect(() => {
        async function getdata() {
            let ax = await axios({
                method: "post",
                url: url,
                data:{
                    pageNO : 1,
                    pageSize: 30,
                    type : "min",
                    userId : "FWDGUEST91"            
                    }
            })
                .then(response => {
                    return response.data.resultList;
                })
                .catch(err => {
                    return undefined;
                });
            if(ax !== undefined){
                ax.map((x) => data.push({
                    id : x.submissionId,
                    process : x.processTypeName,
                    scan : x.scanDatetime,
                    priority : x.priority,
                    status : x.submissionStatus,
                    source : x.source
                })
                )
                console.log("data :",data)
                setSans(true)
            }
        }
        getdata()
        
    },[url])
    const columns = [
        {
            field: 'id',
            headerName: 'Submission ID',
            width: 240,
            align: 'center',
            headerAlign: 'center',
            headerClassName: 'id',
            cellClassName: 'data1',
        },
        {
            field: 'process',
            headerName: 'Process Type',
            width: 240,
            align: 'center',
            headerAlign: 'center',
            cellClassName: 'data2',
        },
        {
            field: 'scan',
            headerName: 'Scan Date - Time',
            width: 240,
            align: 'center',
            headerAlign: 'center',
            cellClassName: 'data3',
            type:"date",
            valueFormatter: (params) => {
                let xx = day(params.value).format("DD/MM/YYYY hh:mm");
                return xx;
              },
        },
        {
            field: 'priority',
            headerName: 'Priority',
            width: 240,
            align: 'center',
            headerAlign: 'center',
            cellClassName: 'data',
            renderCell: (params) => {
                if(params.value === 0){
                    return "Normal"
                }
                else if(params.value === 9){
                    return <p style={{color:"red"}}>High</p>
                }
                else{
                    return "Low"
                }
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 240,
            align: 'center',
            headerAlign: 'center',
            cellClassName: 'data',
        },
        {
            field: 'source',
            headerName: 'Source',
            width: 240,
            align: 'center',
            headerAlign: 'center',
            cellClassName: 'data',
        },
    ];
    return (
        <div>
            <Typography className={classes.header}>
                Registration List
            </Typography>
           {sans && <DataGrid rows={data} columns={columns} className={classes.table} autoPageSize="true" />}
        </div>
    )
}
export default Content;