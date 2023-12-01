import Image from "next/image";
import PythonImg from "@/public/Python.png";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import ModalStyle from "./ModalStyle";
import { Box } from "@mui/material";

export default function Python() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="hover:cursor-pointer">
            <Image onClick={handleOpen} src={PythonImg} alt="Pytohn" />
            <Modal open={open} onClose={handleClose}>
                <Box sx={ModalStyle()}>
                    <h2>Python</h2>
                    <p>Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.</p>
                </Box>
            </Modal>
        </div>
    );
}