import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md';

const Home = () => {
  return (
    <>
      <NavBar />

      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 mt-8'>

        <NoteCard
          title="meeting" 
          date="10/10/2022" 
          content="content" 
          tags={['tag1', 'tag2']} 
          isPinned={false} 
          onEdit={() => { }} 
          onDelete={() => { }} 
          onPinNote={() => { }}
          />
          
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute bottom-5 right-5 ' onClick={() => {}}>
        <MdAdd className='text-[32px] text-white' />
      </button>
    </>
  );
};

export default Home