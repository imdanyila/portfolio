import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState ({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_qj27lbg', 
      'template_oo5shzp', 
      {
        from_name: form.name,
        to_name: 'Daniela',
        from_email: form.email,
        to_email: 'contact@danieladaisy.com',
        message: form.message,
      },
      'yi1a_DSTeiealbsX1'
    )
    .then(() => {
      setLoading(false)
      alert('Message sent successfully, I will get back to you as soon as possible!')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.error(error)
      alert('Message failed to send, please try again.')
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75]  p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-10'
        >
          <label class="flex flex-col relative group">
            <input 
              type="text" 
              name="name" required 
              value={form.name}
              onChange={handleChange}
              class="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium peer" 
            />
            <span 
              for="name" 
              class="text-white font-medium mb-4 cursor-text
              transform transition-all absolute top-0 left-2 h-full flex items-center pl-2
              group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:cursor-default peer-valid:cursor-default
              group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >Your Name</span>
          </label>

          <label class="flex flex-col relative group">
            <input 
              type="text" 
              name="email" required 
              value={form.email}
              onChange={handleChange}
              class="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium peer" 
            />
            <span 
              for="email" 
              class="text-white font-medium mb-4 cursor-text
              transform transition-all absolute top-0 left-2 h-full flex items-center pl-2
              group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:cursor-default peer-valid:cursor-default
              group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >Your Email</span>
          </label>

          <label class="flex flex-col relative group">
          <textarea 
              rows='5'
              name='message'
              id='message'
              value={form.message} required
              onChange={handleChange}
              class="bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium peer" 
            />
            <span 
              for="message" 
              class="text-white font-medium mb-4 cursor-text
              transform transition-all absolute top-0 left-2 h-full flex items-center pl-2
              group-focus-within:h-[30px] peer-valid:h-[30px] group-focus-within:cursor-default peer-valid:cursor-default
              group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
              >Your Message</span>
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-[650px] md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")