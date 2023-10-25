"use client"

import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { onContactRequest } from "./actions";
import { useState } from 'react';

const contactRequestSchema = z.object({
  firstname:z.string().min(2),
  lastname:z.string().min(2),
  email:z.string().email(),
  msg:z.string().min(2)
})

type FormData = z.infer<typeof contactRequestSchema>

export default function Page() {

  const [message,setMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    reValidateMode:"onChange",
    resolver: zodResolver(contactRequestSchema)}
  )

  const onSubmit = async (data: FormData) => {
    try{
      onContactRequest(data);
      setMessage("Votre message a bien été envoyé")
      reset()
    }catch(error){
      setMessage("Une erreur est survenue")
    }
    
  }

  return (
    <div>
      <h1>Contact form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div>
          <label>Nom</label>
          <input type="text" {...register("lastname")}/>
          {errors.lastname && <span>{errors.lastname.message}</span>}
        </div>
        <div>
          <label>Prénom</label>
          <input type="text" {...register("firstname")}/>
          {errors.firstname && <span>{errors.firstname.message}</span>}

        </div>

        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}

        </div>

        <div>
          <label>Message</label>
          <textarea {...register("msg")}/>
          {errors.msg && <span>{errors.msg.message}</span>}

        </div>

        <button type="submit">Envoyer</button>
        
        
      </form>
      {message && <span>{message}</span>}
    </div>
  )
}