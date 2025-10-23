import { TRPCError } from '@trpc/server'

export function handleTRPCError(error: unknown): TRPCError {
  if (error instanceof TRPCError) {
    return error
  }

  if (error instanceof Error) {
    return new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: error.message,
      cause: error,
    })
  }

  return new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'An unknown error occurred',
  })
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof TRPCError) {
    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'An unknown error occurred'
}
