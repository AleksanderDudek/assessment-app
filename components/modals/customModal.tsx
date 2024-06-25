import { Dialog as Modal } from '@/components/ui/dialog'

interface ModalProps {
  open: boolean
  children: React.ReactNode
}

const CustomModal: React.FC<ModalProps> = ({ open, children }) => {
  return (
    <Modal open={open}>
      {children}
    </Modal>
  )
}

export default CustomModal
