export default defineEventHandler(() => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  throw createError({
    statusCode: 400,
    statusMessage: 'Api not found',
  })
})
