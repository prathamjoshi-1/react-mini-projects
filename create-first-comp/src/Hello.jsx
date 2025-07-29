function Hello(){
  let myName='Pratham';
  let number=456;

  let fullName=()=>{
    return 'Lavi Joshi';
  }
  return <p>MessageNum: {number} | I am Your Master {fullName()}</p>
}
export default Hello;  