import { useState, useEffect } from 'react'
import IndicatorGroup from './components/IndicatorGroup'
import MultiForm from './components/MultiForm';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalIndex, setTotalIndex] = useState(4);

  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
  });

  const [multipleData, setMultipleData] = useState([]);

  const inputFields = [
    {
      idx: 1,
      id: 'firstName',
      // name: 'First Name',
      type: 'text',
      placeholder: 'First Name',
      span: '48%',

    },
    {
      idx: 2,
      id: 'lastName',
      // name: 'Last Name',
      type: 'text',
      placeholder: 'Last Name',
      span: '48%',
    },
    {
      idx: 3,
      id: 'email',
      // name: 'First Name',
      type: 'email',
      placeholder: 'Email',
      span: '100%',
    },
    {
      idx: 4,
      id: 'tel',
      // name: 'First Name',
      type: 'tel',
      placeholder: 'Phone Number',
      span: '100%',
    },
  ]

  // Handlers
  const goNext = () => {
    let nextIndex = currentIndex;

    nextIndex = nextIndex == totalIndex - 1 ? 0 : nextIndex + 1;

    setCurrentIndex(prev => {
      return prev == totalIndex - 1 ? 0 : prev + 1;
    });

    setMultipleData(prev => {
      return [
        ...prev.slice(0, currentIndex),
        {...inputData},
        ...prev.slice(currentIndex + 1, prev.length),
      ]
    })

    clearInput();

    if (typeof multipleData[nextIndex] === 'undefined' ) return;

    setInputData(multipleData[nextIndex]);
  }
  
  const goPrev = () => {
    let nextIndex = currentIndex;

    nextIndex = nextIndex == 0 ? totalIndex - 1 : nextIndex - 1;

    setCurrentIndex(prev => {
      return prev == 0 ? totalIndex - 1 : prev - 1;
    });

    setMultipleData(prev => {
      return [
        ...prev.slice(0, currentIndex),
        {...inputData},
        ...prev.slice(currentIndex + 1, prev.length),
      ]
    });

    clearInput();

    if (typeof multipleData[nextIndex] === 'undefined' ) return;

    setInputData(multipleData[nextIndex]);
  }

  // Functions
  const clearInput = () => {
    setInputData({
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
    });
  }

	const handleInputChange = (e) => {
		setInputData(prev => {
			return {
				...prev,
				[e.target.id]: e.target.value
			}
		});
	};

  return (
    <div className="App">
      {/* Global Container */}
      <div className="w-screen h-screen bg-gradient-to-br from-purple-100 to-emerald-50">
        {/* Form Wrapper */}
        <div className="w-full max-w-lg h-full mx-auto px-10 flex justify-center items-center">
          {/* Form Container*/}
          <div className="w-full font-mono space-y-4 mx-auto px-12 bg-white/50 shadow-md backdrop-blur-md py-10 rounded-lg">
            <h1 className='text-2xl font-extrabold text-slate-700'>Multiple Form Demo</h1>
            <IndicatorGroup currentIndex={currentIndex} totalIndex={totalIndex} size="32px" />
            <MultiForm inputFields={inputFields} inputData={inputData} handleInputChange={handleInputChange} goPrev={goPrev} goNext={goNext}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
