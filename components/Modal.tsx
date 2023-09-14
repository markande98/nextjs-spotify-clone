
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

interface ModalProps{
    isOpen: boolean;
    title: string;
    description: string;
    onChange: (open: boolean) => void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    title,
    description,
    onChange,
    children
}) => {
    return ( 
        <Dialog.Root>
            
        </Dialog.Root>
    );
}
 
export default Modal;