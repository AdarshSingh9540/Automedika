import  { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SearchBar() {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isRecording, setIsRecording] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const handleStartRecording = () => {
    if (browserSupportsSpeechRecognition) {
      setIsRecording(true);
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    } else {
      alert("Browser does not support speech recognition.");
    }
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
  };

  const handleGenerateNotes = () => {
    SpeechRecognition.stopListening();
    setShowTranscript(true);
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support speech recognition.</p>;
  }

  return (
    <div className="relative mx-4 md:mx-36 mt-24">
      <input
        type="text"
        placeholder="Add text or Start speaking"
        className="p-2 w-full border-2 border-blue-700 rounded-md outline-none"
        value={transcript}
        readOnly
      />
      {showTranscript && (
        <div className="mt-4 p-2 border-2 border-blue-700 rounded-md">
          {transcript}
        </div>
      )}
      <div className="fixed bottom-4 lg:left-36 lg:right-36">
        {isRecording ? (
          <div className="flex gap-2">
            <button
              className="bg-red-700 text-white font-medium rounded-md p-2 flex-grow"
              onClick={handleStopRecording}
            >
              Stop Recording
            </button>
            <button
              className="bg-green-900 text-white font-medium rounded-md p-2 flex-grow"
              onClick={handleGenerateNotes}
            >
              Generate Notes
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-700 text-white font-medium rounded-md p-2 w-full"
            onClick={handleStartRecording}
          >
            Start Recording
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;