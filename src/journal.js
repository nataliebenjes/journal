function Journal(text, date) {
  this.text = text;
  this.date = date;
}

Journal.prototype.returnWords = function(){
  let journalText = this.text; 
  let journalEntry = [];
  journalEntry(journalText.spilt(" "));
  
  return journalEntry.length;
};
