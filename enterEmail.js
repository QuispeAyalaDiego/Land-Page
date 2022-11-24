const e=React.createElement;
class email extends React.Component{

    constructor(props){
        super(props);
        this.state={
            register:false
        }





    }   

    render()
    {

        if (this.state.register)
        {
            return 'Registar';



        }

        return e('button',{onclick:()=>this.setstate({register:true})},'Registrar');

    }

}

const domContainer=document.querySelector('#email');
const root=ReactDOM.createRoot(domContainer);
root.render(e(RegisterButton));