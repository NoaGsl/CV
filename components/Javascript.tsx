import Image from "next/image";
import JS from "@/public/JS.png";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import ModalStyle from "./ModalStyle";
import { Box } from "@mui/material";

export default function Javascript() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="hover:cursor-pointer">
            <Image onClick={handleOpen} src={JS} alt="Javascript" />
            <Modal open={open} onClose={handleClose}>
                <Box sx={ModalStyle()}>
                    <h2>Javascript</h2>
                    <p>Javascript is a programming language that is used to make web pages interactive. It is a scripting language that is used to create and control dynamic website content, i.e. anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page.</p>
                </Box>
            </Modal>
        </div>
    );
}