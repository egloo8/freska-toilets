import React from 'react'
import Toilet from './Toilet'

class Toilets extends React.Component {
    componentDidMount() {
        this.props.fetchToiletsData()
    }
    render() {
        console.log(this.props.api.data)
        console.log(this.props.api.isFetching)
        let data = this.props.api.data
        if (this.props.api.isFetching) {
            return (
                <div>
                    LOADING
                </div>
            )
        }
        return (
            <div>
                {data.map((toilet, index) => (
                    <Toilet key={index} {...toilet} />
                ))}
            </div>
        )

    }
}

export default Toilets