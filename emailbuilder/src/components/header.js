import CG_Logo_GoldNavy_header from "../utils/CG_Logo_GoldNavy_header.svg"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Header = () =>{


    return (
        <>
        {/* <div>Hello World</div> */}
        <div style={{"padding":"10px", "backgroundColor": "#002C3F", "width": "100%","display":"flex","justifyContent":"space-between","alignItems":"center"}}>
        <div style={{"textAlign":"left",}}  > 
        {/* <h1>Hello World</h1> */}
        <img src={CG_Logo_GoldNavy_header} > 
        </img>
        </div>
        <div style={{"textAlign":"right"}}>
            <div style={{"paddingRight":"20px"}}>
            <AccountCircleIcon sx={{"color":"white", "fontSize": 33,}}></AccountCircleIcon>
            </div>
        </div>
        </div>
        </>
    )

}