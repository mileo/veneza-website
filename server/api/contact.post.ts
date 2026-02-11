export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.nome || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nome e email são obrigatórios.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email inválido.',
    })
  }

  // In production, this would send an email or save to a database
  console.log('Contact form submission:', {
    nome: body.nome,
    email: body.email,
    assunto: body.assunto || '',
    mensagem: body.mensagem || '',
    timestamp: new Date().toISOString(),
  })

  return { success: true, message: 'Mensagem recebida com sucesso!' }
})
