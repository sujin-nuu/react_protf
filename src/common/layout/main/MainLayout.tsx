import { useState } from "react";
import { Outlet } from "react-router-dom"
import 'src/assets/css/main.css';
import cloudIcon from 'src/assets/img/cloud.png';

export const MainLayout = () => {

    const [xy, setXY] = useState({ x: 0, y: 0 })

    const xyHandler = (e: any) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setXY({ x: mouseX, y: mouseY });
    }

    return (
        <div
            style={{ width: '100vw', height: '100vh', overflowX: 'hidden' }}
            onMouseMove={xyHandler}
        >
            <div
                /* 마우스 아이콘 */
                className='pointer'
                style={{
                    transform: `translate(${xy.x}px, ${xy.y}px)`
                }}
            />
            <div
                /* 탑 메뉴 */
                style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', overflowX: 'hidden' }}>
                <div className="nav" style={{ width: '8%', marginLeft: '2rem' }}>
                    <img src={cloudIcon} width={60} height={60} alt="mainIcon" />
                </div>
                <div className="nav" style={{ width: '80%', marginTop: '1.5rem' }}>
                    <span className="menuItem">
                        Career
                    </span>
                    <span className="menuItem">
                        Portfolio
                    </span>
                    <span className="menuItem">
                        contact
                    </span>
                </div>
                <div style={{ width: '10%' }}>

                </div>
            </div>
            <div
                className="content">
                <div style={{ width: '10%' }} >
                    <div 
                        className="noDrag"
                        style={{ textCombineUpright: 'none', writingMode: 'vertical-lr', textOrientation: 'upright', margin: '1rem', position: 'fixed' }}>
                        <span>HELLO</span>
                        <span
                            className="cloudEmoj">☁</span>
                        <span>こんにちは</span>
                        <span style={{ textCombineUpright: 'all', marginTop: 10, marginBottom: 20 }}>: )</span>
                    </div>
                </div>
                <div style={{ width: '80%' }}>
                    <Outlet />
                </div>
                <div style={{ width: '10%' }} />
            </div>
        </div>
    )
}