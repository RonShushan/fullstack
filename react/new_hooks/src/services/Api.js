import axios from 'axios'

const Globalurl = 'https://jsonplaceholder.typicode.com/'



const LocalHostlurl = 'http://localhost:5000/'
const YnetApi = 'https://ynet.co.il/getLatestNews'
const YnetApi1 = 'https://ynet.co.il/getLatestNews'

//'http://localhost:4000/users'
//'http://localhost:4000/products'

export const GetRequest = async (functionName) => {
    //`http://localhost:5000/addUser?name=abc&phone=112&mail=s@gmail.com`
    const res = await axios.get(LocalHostlurl+functionName);
    return res.data;
};




// export const GetRequest = async (fnName,index=0) => {
//     const res  = "";
//     let fullUrl = index == 0 ? LocalHostlurl : YnetApi ;
//     //let fullUrl = index == 0 ? LocalHostlurl : index == 1 ? YnetApi : YnetApi1;

//     await axios.get(fullUrl + fnName);

//     // switch(index)
//     // {
//     //     case 0:
//     //         await axios.get(LocalHostlurl + fnName);
//     //         break;
        
//     //     case 1:
//     //         await axios.get(YnetApi + fnName);
//     //         break;

//     //     default : 
//     //          alert("Not found url")
//     //         break
//     // }
    
//     return res.data;
// };


export const PostRequest = (url) => {
    return "post";
};


