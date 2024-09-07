import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

function Navbar() {
  return (

    <div className=' flex justify-between items-center h-24 max-w-full  text-[#2C2C2C] text-center px-5 py-3'>
        <div >
            <IoIosArrowBack size={45} />  
        </div>
        <div className='flex-1 flex justify-center justify-items-center'>
          <h1 className=' text-3xl w-full h-12 top-33px font-semibold leading-10'>Leaderboard</h1>
        </div>
        

        <div className='px-3'>
            <svg width="30" height="34" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.6432 1.81951e-07C31.7183 1.6246e-07 30.8024 0.182178 29.9479 0.536131C29.0934 0.890085 28.3169 1.40888 27.6629 2.06291C27.0089 2.71693 26.4901 3.49336 26.1361 4.34788C25.7822 5.2024 25.6 6.11827 25.6 7.0432C25.6 7.96813 25.7822 8.884 26.1361 9.73852C26.4901 10.593 27.0089 11.3695 27.6629 12.0235C28.3169 12.6775 29.0934 13.1963 29.9479 13.5503C30.8024 13.9042 31.7183 14.0864 32.6432 14.0864C34.5112 14.086 36.3025 13.3435 37.623 12.0224C38.9436 10.7012 39.6852 8.90957 39.6848 7.0416C39.6844 5.17363 38.9419 3.38233 37.6208 2.06177C36.2996 0.741218 34.508 -0.000424109 32.64 1.81951e-07H32.6432ZM7.0432 1.81951e-07C6.11827 1.6246e-07 5.2024 0.182178 4.34788 0.536131C3.49336 0.890085 2.71693 1.40888 2.06291 2.06291C1.40888 2.71693 0.890086 3.49336 0.536132 4.34788C0.182178 5.2024 0 6.11827 0 7.0432C0 7.96813 0.182178 8.884 0.536132 9.73852C0.890086 10.593 1.40888 11.3695 2.06291 12.0235C2.71693 12.6775 3.49336 13.1963 4.34788 13.5503C5.2024 13.9042 6.11827 14.0864 7.0432 14.0864C8.91117 14.086 10.7025 13.3435 12.023 12.0224C13.3436 10.7012 14.0852 8.90957 14.0848 7.0416C14.0844 5.17363 13.3419 3.38233 12.0208 2.06177C10.6996 0.741218 8.90797 -0.000424109 7.04 1.81951e-07H7.0432Z" fill="#2C2C2C"/>
            <path d="M32.6432 24C31.7183 24 30.8024 24.1822 29.9479 24.5361C29.0934 24.8901 28.3169 25.4089 27.6629 26.0629C27.0089 26.7169 26.4901 27.4934 26.1361 28.3479C25.7822 29.2024 25.6 30.1183 25.6 31.0432C25.6 31.9681 25.7822 32.884 26.1361 33.7385C26.4901 34.593 27.0089 35.3695 27.6629 36.0235C28.3169 36.6775 29.0934 37.1963 29.9479 37.5503C30.8024 37.9042 31.7183 38.0864 32.6432 38.0864C34.5112 38.086 36.3025 37.3435 37.623 36.0224C38.9436 34.7012 39.6852 32.9096 39.6848 31.0416C39.6844 29.1736 38.9419 27.3823 37.6208 26.0618C36.2996 24.7412 34.508 23.9996 32.64 24H32.6432ZM7.0432 24C6.11827 24 5.2024 24.1822 4.34788 24.5361C3.49336 24.8901 2.71693 25.4089 2.06291 26.0629C1.40888 26.7169 0.890086 27.4934 0.536132 28.3479C0.182178 29.2024 0 30.1183 0 31.0432C0 31.9681 0.182178 32.884 0.536132 33.7385C0.890086 34.593 1.40888 35.3695 2.06291 36.0235C2.71693 36.6775 3.49336 37.1963 4.34788 37.5503C5.2024 37.9042 6.11827 38.0864 7.0432 38.0864C8.91117 38.086 10.7025 37.3435 12.023 36.0224C13.3436 34.7012 14.0852 32.9096 14.0848 31.0416C14.0844 29.1736 13.3419 27.3823 12.0208 26.0618C10.6996 24.7412 8.90797 23.9996 7.04 24H7.0432Z" fill="#2C2C2C"/>
            </svg>
        </div>
    </div>
  )
}

export default Navbar
