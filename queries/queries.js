import { db } from "../config/config.js"

const verPosts = async () => {
  try {
    const consultaFotos = {
      text: "select * from posts",
    };
    //console.log("print fotos", consultaFotos);
    const result = await db.query(consultaFotos);
    //console.log("print result", result);
    return result.rows;
  } catch (err) {
    console.log(err.message);
  }
};

const agregarPost = async (post) => {
  try {
    const consultaFotos = {
      text: "insert into posts (titulo, img, descripcion) values ($1, $2, $3) returning *",
      values: post,
    };

    const result = await db.query(consultaFotos);
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.log(err.message);
  }
};

const addLike = async (id) => {
  try {
    const consultaFotos = {
      text: "update posts set likes = likes + 1 where id = $1 returning *",
      values: id,
    };

    const result = await db.query(consultaFotos);
    console.log(result.rows);
    return result.rows;
  } catch (err) {
    console.log(err.message);
  }
};

export { verPosts, agregarPost, addLike };