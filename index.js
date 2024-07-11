import { dbPool } from "./utils/dbcon.js";


async function insertUser(username, password){
    try{
        // let query = "INSERT INTO batch1 (username, password) values ('"+username+"','"+password+"')";
        // console.log(query);
        // const [result] = await dbPool.query(query)
        let query = "INSERT INTO batch2 (username,password) values (?,?)";
        const [result] = await dbPool.query(query,[username,password])
       // console.log("INI yang di balikin full dari mysql2",result);
        return result.insertId
        
    }catch(error){
        throw error;
    }
}

async function GetAllUser(){
    let query = "select * from batch2";
    let [result] = await dbPool.query(query)
    return result
}

async function DeleteUser(id){
    let query = "delete from batch2 where id = "+id;
    let [result] = await dbPool.query(query)
    return result
}

async function updateUser(id,username,password){
    let query = "update batch2 set username='"+username+"', password='"+password+"' where id = "+id;
    let [result] = await dbPool.query(query)
    return result
}

let ins_data = await insertUser("Rovi","12345")
let ins_data2 = await insertUser("Alvian","12345")
let ins_data3 = await insertUser("Rovi","12345")
let data_yg_db = await GetAllUser()
console.log("data awal di insert ",data_yg_db)
 updateUser(ins_data2,"freeeeeeya","yeyeye");
data_yg_db =  GetAllUser()
console.log("data yg sudah ada di update",data_yg_db)
 DeleteUser(ins_data3)
data_yg_db =  GetAllUser()
console.log("data id ke",ins_data3," sudah di delete",data_yg_db)


//test 12312312312

//test dari pa alvian
