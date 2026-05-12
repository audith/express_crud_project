const db=require('../config/db');

class TaskModel{
    static async createTask(title,description){
        const query=`INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *`;
        const values=[title, description];
        const  result=await db.query(query, values);
        return result.rows[0];
    }

    static async getAllTasks(){
        const result=await db.query('SELECT * FROM tasks ORDER BY DESC');
        return result.rows;
    }   

    static async getTaskById(id){
        const result=await db.query('SELECT * FROM tasks WHERE id=$1', [id]);
        return result.rows[0];
    }

    static async updateTask(id, title,description,completed){
        const query=`UPDATE tasks SET title=$1, description=$2, completed=$3 WHERE id=$4 RETURNING *`;
        const values=[title, description, completed, id];
        const result=await db.query(query,values);
        return result.rows[0];
    }

    static async deleteTask(id){
        const result=await db.query('DELETE FROM tasks WHERE id=$1 RETURNING *', [id]);
        return result.rows[0];
    }

}

module.exports=TaskModel;