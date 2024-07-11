import React from 'react';
import { Link } from 'react-router-dom';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

function Footer() {
  return (
    <footer className='bg-gray-100 text-violet-600 text-center p-4 rounded mt-10'>
        <div className='flex justify-evenly '>
        <Link to="/confidential">Құпиялық саясаты</Link>
        <h1>Қолдау қызметі:</h1>
          <div>
            <CallOutlinedIcon/>
            <a className="underline underline-offset-4" href='tel:+ 7 775 700 44 94'>+ 7 775 700 44 94</a>
          </div>
          <div>
            <QuestionAnswerOutlinedIcon/>
            <a className='underline underline-offset-4' href="https://web.whatsapp.com/">Бізге жазыңыз</a>
          </div>
          <p className='underline underline-offset-4'>shop@swiftness.kz</p>
        </div>
        <p className='mt-[80px] text-base'>© 2024 Swiftness online shop. Все права защищены</p>
    </footer>
  )
}

export default Footer;