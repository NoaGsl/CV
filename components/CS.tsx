import Image from "next/image";
import CSImg from "@/public/CS.png";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import ModalStyle from "./ModalStyle";
import { Box } from "@mui/material";

export default function CS() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="hover:cursor-pointer">
            <Image onClick={handleOpen} src={CSImg} alt="CS" />
            <Modal open={open} onClose={handleClose}>
                <Box sx={ModalStyle()}>
                 <p>C#</p>
                 <p>BABABABABBABABABABABBABABBABAB</p>
                </Box>
            </Modal>
        </div>
    );
}