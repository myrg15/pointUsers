import { Request, Response } from "express"

const getUsers = (req: Request, res: Response) => {
  //logica de lo que yo quiero hacer/devolver

  return res.send('GET USERS')
}

const createUsers = (req: Request, res: Response) => {
  //logica para crear peliculas
  console.log('create');

  return res.send('CREATE USERS')
}

const updateUsersById = (req: Request, res: Response) => {
  //logica para actualizar pelicula  
  const usersId = req.params.id

  return res.send('UPDATE USERS ' + usersId)
}

const deleteUsersById = (req: Request, res: Response) => {
  //logica para eliminar peliculas
  
  const usersId = req.params.id

  return res.send('DELETE USERS ' + usersId)
}

const getUsersById = (req: Request, res: Response) => {
  const usersId = req.params.id;

  return res.send(`GET USERS WITH id: ${usersId}`)
}

export { getUsers, createUsers, updateUsersById, deleteUsersById, getUsersById }