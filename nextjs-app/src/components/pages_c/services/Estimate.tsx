import Link from "next/link"
import { useEffect, useState } from "react"

const Estimate = () => {


  return (
    <div className="container mx-auto px-2 pt-4 pb-12">
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center">価格</h2>
      <h3 className='w-full m-4 text-4xl font-bold leading-tight text-center'>(デモ版無料)</h3>

      <div className="flex flex-col items-center">
        <ol className="p-5" style={{ "listStyle": "auto" }} type="1">
          <li>以下からヒアリングシートをコピー</li>
          <li>不明な点は空白にして内容をご記入ください。</li>
          <li>下記コンタクトフォームに添付してお送りください。</li>
          <li>24時間以内にご返信いたします。</li>
        </ol>

        <div className="flex flex-col gap-5">
          <a download href={"/assets/excel/hearingsheet.xlsm"} className="hidden bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>エクセル</span>
          </a>
          <a download href={"https://docs.google.com/spreadsheets/d/18maOFFL5L9ewMi-rLZQQ1RK6dPlZECZo/edit?usp=share_link&ouid=100352992861684038724&rtpof=true&sd=true"} className="w-max bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Google シート</span>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Estimate