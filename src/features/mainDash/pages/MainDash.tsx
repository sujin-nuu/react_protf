import cloudImg from 'src/assets/img/clouds-bg5.jpg';
import 'src/assets/css/main.css';
import { useState } from 'react';

const MainDash = () => {

    const [xy, setXY] = useState({ x: 0, y: 0 })

    const xyHandler = (e: any) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setXY({ x: mouseX, y: mouseY });

    }

    //#afd6ff
    return (
        <div
            onMouseMove={xyHandler}
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#FFFFFF'
            }}>
            <div className='pointer' style={{
                transform: `translate(${xy.x}px, ${xy.y}px)`
            }} />
        </div>
    )
}

export default MainDash;