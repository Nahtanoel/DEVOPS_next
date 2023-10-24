"use client"

import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { onContactRequest } from "./actions";

const contactRequestSchema = z.object({
  firstname:z.string().min(2),
  lastname:z.string().min(2),
  email:z.string().email(),
  msg:z.string().min(2)
})

type FormData = z.infer<typeof contactRequestSchema>

export default function Page() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(contactRequestSchema)}
  )

  const onSubmit = (data: FormData) => {
    onContactRequest(data);
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

        <button type="submit">Send message</button>
        

      </form><button onClick={()=> alert("")}>Sen</button>
    </div>
  )
}