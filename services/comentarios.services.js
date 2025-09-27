import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.3hjgkoa.mongodb.net/?retryWrites=true&w=majority&tls=true");
const db = client.db("AH20232CP1");

export async function getComentariosByProducto(productoId) {
  await client.connect();
  return db
    .collection("comentarios")   
    .find({ productoId: new ObjectId(productoId) })
    .toArray();
}

export async function getComentarioById(id) {
    if (!ObjectId.isValid(id)) {
        return null;
    }
    await client.connect();
    return db.collection("comentarios").findOne({ _id: new ObjectId(id) });
}


// 👉 Traer todos los comentarios
export async function getComentarios() {
  await client.connect();
  return db.collection("comentarios").find({}).toArray();
}


// 👉 Crear comentario
export async function createComentario(productoId, comentario) {
  if (!comentario?.comentario || !comentario?.email) {
    throw new Error("El comentario y el email son obligatorios");
  }

  await client.connect();
  const collection = db.collection("comentarios"); 

const randomAvatar = `https://i.pravatar.cc/50?u=${comentario.email}`;

const nuevoComentario = {
  productoId: new ObjectId(productoId),
  email: comentario.email,
  foto: randomAvatar,
  comentario: comentario.comentario,
  timestamp: new Date(),
};

  const result = await collection.insertOne(nuevoComentario);
  return { _id: result.insertedId, ...nuevoComentario };
}

//👉 Editar comentario
export async function updateComentario(id, comentario) {
  await client.connect();
  const collection = db.collection("comentarios");
  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: comentario }
  );
  return { _id: id, ...comentario };
}

// 👉 Borrar comentario
export async function deleteComentario(id) {
  await client.connect();
  const collection = db.collection("comentarios");
  await collection.deleteOne({ _id: new ObjectId(id) });
  return id;
}
