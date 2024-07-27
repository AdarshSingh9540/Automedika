import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Bar() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support speech recognition.</p>;
  }

  return (
    <div className='mt-28'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })}>
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>
        Stop
      </button>
      <button onClick={resetTranscript}>
        Reset
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default Bar;
