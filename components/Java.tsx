import Image from "next/image";
import JavaImg from "@/public/Java.png";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import ModalStyle from "./ModalStyle";
import { Box } from "@mui/material";

export default function Java() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="hover:cursor-pointer">
            <Image onClick={handleOpen} src={JavaImg} alt="Java" />
            <Modal open={open} onClose={handleClose}>
                <Box sx={ModalStyle()}>
                    <h2>Java</h2>
                    <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>
                </Box>
            </Modal>
        </div>
    );
}