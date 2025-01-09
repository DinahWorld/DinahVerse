import {Grid} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";

interface SlidebarProps {
    first: number;
    second: number;
    length: number;
    imageNumber: number;
    onChangeImage: (newImageNumber: number) => void;
}

const Slidebar: React.FC<SlidebarProps> = ({length, first, second, imageNumber, onChangeImage}) => {
    const [hookedYPosition, setHookedYPosition] = useState(length - 10);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const barRef = useRef<HTMLDivElement>(null);

    let mainColor = "";
    let secondColor = "";
    let firstN = first - 30;
    let secondN = second - 60;
    let lengthN = length - 95;

    switch (imageNumber) {
        case 1:
            mainColor = "#D2D8FC";
            secondColor = "#8D95FF";
            break;
        case 2:
            mainColor = "#F7D7D7";
            secondColor = "#FF8C8C";
            break;
        case 3:
            mainColor = "#7A7B80";
            secondColor = "#FFFFFF";
            break;
    }

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging && barRef.current) {
            const rect = barRef.current.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            setHookedYPosition(Math.max(0, Math.min(offsetX, length)));

            const newImageNumber = offsetX < first ? 1 : (offsetX < second ? 2 : 3);
            onChangeImage(newImageNumber);
        }
    };

    const handleMouseDown = (event: React.MouseEvent) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClick = (event: React.MouseEvent) => {
        if (barRef.current) {
            const rect = barRef.current.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            setHookedYPosition(Math.max(0, Math.min(offsetX, length)));

            const newImageNumber = offsetX < first ? 1 : (offsetX < second ? 2 : 3);
            onChangeImage(newImageNumber);
        }
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <Grid container className={"progress-bar"} sx={{width: "60vw"}} gap={0.2}>
            <Grid container item xs={12}>
                <div style={{position: "relative", left: "-10px", fontSize: "0.7rem", fontStyle: "bold"}}>2016</div>
                <div style={{position: "relative", left: `${firstN}px`, fontSize: "0.7rem", fontStyle: "bold"}}>2019
                </div>
                <div style={{position: "relative", left: `${secondN}px`, fontSize: "0.7rem", fontStyle: "bold"}}>2022
                </div>
                <div style={{position: "relative", left: `${lengthN}px`, fontSize: "0.7rem", fontStyle: "bold"}}>2024
                    👨🏾‍🎓
                </div>
            </Grid>
            <Grid item xs={12}
                  ref={barRef}
                  sx={{
                      backgroundColor: `${mainColor}`,
                      borderRadius: "3.5rem",
                      cursor: "pointer",
                      height: '15px',
                      position: 'relative',
                  }}
                  onMouseDown={handleMouseDown}
                  onClick={handleClick}
            >
                <div
                    style={{
                        backgroundColor: `${secondColor}`,
                        height: '20px',
                        width: "20px",
                        borderRadius: "50%",
                        position: "absolute",
                        left: `${hookedYPosition}px`,
                        top: '50%',
                        transform: isHovered ? 'translateY(-50%) scale(1.2)' : 'translateY(-50%) scale(1)',
                        transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </Grid>
        </Grid>
    );
}

export default Slidebar;