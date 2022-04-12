import db from '../db.js'

class post_controller {
    async createPost(req, res){
        const {title, content, userId} = req.body
        const post = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId])
        res.json(post.rows[0])
    }

    async getPostByUser(req, res){
        const id = req.query.id
        console.log(id)
        const posts = await db.query(`Select * FROM post where user_id = $1`, [id])
        res.send(posts.rows)
    }
}

export default new post_controller