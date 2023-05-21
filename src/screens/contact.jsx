import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import {db} from '../firebase.config';

const ContactUs = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email!=='' && subject!=='' && message!==''){
    await addDoc(collection(db, "contacts"),{
        email:email,
        subject:subject,
        message:message,
        createdAt: serverTimestamp(),
    })
    alert('Submitted ,we will contact you soon!')
    setSubject('');
    setEmail('');
    setMessage('');
}
  };

  return (
    <section class="bg-white my-[3rem] dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-2xl sm:text-3xl tracking-tight font-extrabold text-center text-[#FBB040] dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Get in Touch with Vartuetech: Reach Out for Innovative Solutions and Collaboration</p>
        <form action="#" class="space-y-8" onSubmit={handleSubmit}>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value.trim())} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FBB040] focus:border-[#FBB040] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FBB040] dark:focus:border-[#FBB040] dark:shadow-sm-light" placeholder="name@domain.com" required />
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input value={subject} onChange={(e)=> setSubject(e.target.value)} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#FBB040] focus:border-[#FBB040] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FBB040] dark:focus:border-[#FBB040] dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea value={message} onChange={(e)=> setMessage(e.target.value)} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#FBB040] focus:border-[#FBB040] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FBB040] dark:focus:border-[#FBB040]" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#006EB0] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
  </section>
  );
};

export default ContactUs;
