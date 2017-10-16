import Vue from 'vue'

class Recognition {
  constructor() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    this.recognition = new SpeechRecognition()
    
    this.recognition.continuous = false 
    this.recognition.lang = 'en-US'
    this.recognition.interimResults = false
    this.recognition.maxAlternatives = 2

    this.initHandlers()
  }


  // Actions
  start(){
    console.info("Recognition.start()")
    this.recognition.start()
  }
  abort(e){
    console.info("Recognition.abort()", e)
  }
  stop(e){
    console.info("Recognition.stop()", e)
  }
  // Handlers
  initHandlers(){
    // Start
    this.recognition.onstart = this.onStart.bind(this)
    this.recognition.onaudiostart = this.onAudioStart.bind(this)    
    this.recognition.onsoundstart = this.onSoundStart.bind(this)
    this.recognition.onspeechstart = this.onSpeechStart.bind(this)

    // End
    this.recognition.onsoundend = this.onSoundEnd.bind(this)    
    this.recognition.onaudioend = this.onAudioEnd.bind(this)
    this.recognition.onend = this.onEnd.bind(this)
    
    this.recognition.onnomatch = this.onNoMatch.bind(this)
    this.recognition.onerror = this.onError.bind(this)
    this.recognition.onresult = this.onResult.bind(this)
  }
  // Start
  onStart(e){
    console.info("Recognition.onStart()", e)
    console.log(this)
  }
  onAudioStart(e){
    console.info("Recognition.onAudioStart()", e)
  }
  onSoundStart(e){
    console.info("Recognition.onSoundStart()", e)
  }
  onSpeechStart(e){
    console.info("Recognition.onSpeechStart()", e)
  }
  
  // End
  onSpeechEnd(e){
    console.info("Recognition.onSpeechEnd()", e)
  }
  onSoundEnd(e){
    console.info("Recognition.onSoundEnd()", e)
  }
  onAudioEnd(e){
    console.info("Recognition.onAudioEnd()", e)
  }
  onEnd(e){
    console.info("Recognition.onEnd()", e)
  }
  onError(e){
    console.info("Recognition.onError()", e)
  }
  onNoMatch(e){
    console.info("Recognition.onNoMatch()", e)
  }
  onResult(e){
    console.info("Recognition.onResult()", e)
  }
  listen(){
    console.log("ok")
  }
}

export default new Recognition()
