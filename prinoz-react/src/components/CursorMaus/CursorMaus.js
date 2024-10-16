import React, { useEffect } from 'react';
const CursorMaus = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursorinner = document.querySelector('.cursor2');
        const links = document.querySelectorAll('a');

        function onMouseMove(e) {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
            cursorinner.style.left = x + 'px';
            cursorinner.style.top = y + 'px';
        }

        function onMouseDown() {
            cursor.classList.add('click');
            cursorinner.classList.add('cursorinnerhover');
        }

        function onMouseUp() {
            cursor.classList.remove('click');
            cursorinner.classList.remove('cursorinnerhover');
        }

        function onLinkHover() {
            cursor.classList.add('hover');
        }

        function onLinkLeave() {
            cursor.classList.remove('hover');
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        links.forEach(link => {
            link.addEventListener('mouseover', onLinkHover);
            link.addEventListener('mouseleave', onLinkLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);

            links.forEach(link => {
                link.removeEventListener('mouseover', onLinkHover);
                link.removeEventListener('mouseleave', onLinkLeave);
            });
        };
    }, []);

    return (
        <div>
            <div className="cursor"></div>
            <div className="cursor2"></div>
        </div>
    )
}

export default CursorMaus; 