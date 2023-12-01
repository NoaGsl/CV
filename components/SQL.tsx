import Image from "next/image";
import SQLImg from "@/public/SQL.png";
import Modal from '@mui/material/Modal';
import ModalStyle from "./ModalStyle";
import { Box } from "@mui/material";
import { useState } from "react";

export default function SQL() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="hover:cursor-pointer">
            <Image onClick={handleOpen} src={SQLImg} alt="SQL" />
            <Modal open={open} onClose={handleClose}>
                <Box sx={ModalStyle()}>
                    <h2>SQL</h2>
                    <p>SQL is a standard language for storing, manipulating and retrieving data in databases.</p>
                </Box>
            </Modal>
        </div>
    );
}