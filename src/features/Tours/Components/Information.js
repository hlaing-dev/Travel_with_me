import React from 'react'

const information = props => {
    const { pkgName } = props
    return (
        <div>
            <h3>
                {pkgName}
            </h3>
        </div>
    )
}
export default information