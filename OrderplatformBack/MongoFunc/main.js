const MongoClient = require("mongodb");

let Mongodurl = 'mongodb://localhost:27017/'

function check (dbDatas,dbList,criteria,callback) {
    return MongoClient.connect(Mongodurl,{useUnifiedTopology:true},function(err,db){
    	if(err) throw err;
    	let dbo = db.db(dbDatas);
    	dbo.collection(dbList). find(criteria).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            db.close();
            callback(result);
        });
    })
    // 第一个参数数据库 第二个参数数据库类 第三个参数查询条件 第四参数为回调函数
}

module.exports = {
    check : check
}
