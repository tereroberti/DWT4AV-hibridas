import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.3hjgkoa.mongodb.net/?retryWrites=true&w=majority&tls=true");
const db = client.db("AH20232CP1")


export async function getProductos( filter = {} ) {
  const filterMongo = { eliminado: { $ne: true } }

  if( filter.categoria != undefined ){
    filterMongo.categoria = { $eq: filter.categoria }
  }

  if( filter.mayorQue != undefined ){
    filterMongo.precio = { $gte: parseInt(filter.mayorQue) }
  }

  if( filter.menorQue != undefined ){
    filterMongo.precio = { $lte: parseInt( filter.menorQue ) }
  }

  if( filter.menorQue != undefined && filter.mayorQue != undefined ){
    filterMongo.$and = [ { precio: { $lte: parseInt( filter.menorQue ) } }, { precio: { $gte: parseInt(filter.mayorQue) } } ]
  }
  await client.connect()
  return db.collection("productos").find(filterMongo).toArray()
}


export function getProductoById(id){
  if (!ObjectId.isValid(id)) {
    return null; 
  }
  return db.collection("productos").findOne({ _id: new ObjectId(id) });
}


export async function editarProducto(id, producto){
  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  await db.collection("productos").updateOne(
    { _id: new ObjectId(id) },
    { $set: producto }
  );

  return db.collection("productos").findOne({ _id: new ObjectId(id) });
}


export async function guardarProducto(producto){
  const result = await db.collection("productos").insertOne(producto);
  return { _id: result.insertedId, ...producto };
}


export function borrarProducto(id){
  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }
  return db.collection("productos").updateOne({ _id: new ObjectId(id) }, { $set: { eliminado: true } });
}