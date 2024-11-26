import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import client from "../client"
import {Circles} from "react-loader-spinner"

const Spinner = ({message}) => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full ">

		<Circles color ="#00BFFF" height={50} width={200} className="m-5" />
		<p className="text-lg text-center px-2">{message}</p>
		</div>
	)
}

export default Spinner