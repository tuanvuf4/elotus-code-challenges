import React, {useEffect, useState} from "react";

export const ErrorMessage = (props: any) => {
  const { message } = props

  return (
    <>
      <div className={`form-error show`}>
        <p>
          {message}
        </p>
      </div>
    </>
  )
}
