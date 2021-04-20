//const {Component} = require(React);

   import React, { Component } from 'react';
    import StudentServices from './StudentServices';
    
    class ListStudentComponent extends Component {
        constructor(){
            super();
            this.state={
                students :[]
            }
        }
        componentDidMount(){
            StudentServices.getStudents().then((res)=>
            {
            this.setState({students: res.data});
        }
            );
        }
        render() {
            return (
                <div>
                    <h2 className ="text.center">Student List</h2>
                    <div className= "row">
                        <table className ="table table-striped table-bordered">
                            <tbody>
                                <tr>
                                    <th>student ID</th>
                                    <th>Student Name</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    this.state.students.map(
                                        students=>
                                        <tr key ={students.id}>
                                            <td>
                                                {students.name}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>    
                    </div>
                </div>
            );
            
    }
   // export ListStudentComponent.ListStudentComponentent;
export default ListStudentComponentent;
}
