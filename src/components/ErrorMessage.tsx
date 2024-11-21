import { ApiError } from '@/types/index'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
} from './ui/alert-dialog'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { useState } from 'react'

type ErrorMessageProps = {
  open: boolean
  error: ApiError | null
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const status = error?.status
  const method = error?.method
  const message = error?.message
  const [open, setOpen] = useState(false)

  const noretry: boolean = true

  const handleCloseTrigger = () => {
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Button variant="outline" size="icon" onClick={handleCloseTrigger}>
          <X />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {method}: {status}
          </AlertDialogTitle>
          <AlertDialogAction></AlertDialogAction>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {noretry && <AlertDialogCancel>Close</AlertDialogCancel>}
          <AlertDialogAction></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
