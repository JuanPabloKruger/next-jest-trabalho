export function validateLoginInput(data: {
  email: string
  password: string
}) {

  if (!data.email) {
    //throw new Error("Email é obrigatório")
  }

  if (!data.password) {
    throw new Error("Senha é obrigatória")
  }

  return data
}