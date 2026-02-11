export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email é obrigatório.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email inválido.',
    })
  }

  if (!body.dataInicio) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Data de início é obrigatória.',
    })
  }

  // In production, this would send an email or save to a database
  console.log('Job application submission:', {
    nome: body.nome || '',
    sobrenome: body.sobrenome || '',
    email: body.email,
    telefone: body.telefone || '',
    dataInicio: body.dataInicio,
    linkCurriculo: body.linkCurriculo || '',
    timestamp: new Date().toISOString(),
  })

  return { success: true, message: 'Candidatura recebida com sucesso!' }
})
