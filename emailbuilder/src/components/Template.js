import React, { useContext, useEffect } from "react";
import { Contentcontext } from "../context/Context";
import Content from "./TemplateComponents/Content";
import Images from "./TemplateComponents/Images";
import CallToAction from "./TemplateComponents/CallToAction";
import CgDarkLogo from "../Images/CG-logo-light.svg";
const Template = () => {
  const { arr, setArr, onClickHandler, setEditorBtn, setFormatting } =
    useContext(Contentcontext);
  useEffect(() => {
    return console.log(arr);
  }, []);
  const bgc = "#ffffff";
  let ind = -1;
  const onDragEnter = (e) => {
    if (e.target.className === "template-class") {
      console.log("working");
    }
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDrop = (e) => {
    e.preventDefault();
    console.log("this is also working");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <div
        className="template-class"
        style={{ width: "600px", backgroundColor: bgc }}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        onClick={() => {
          setEditorBtn("f");
          setFormatting("bgcolor");
        }}
      >
        {arr &&
          arr?.map((item, index) => {
            if (item === "Content") return <Content key={index} />;
            if (item === "Image") return <Images key={index} />;
            return <CallToAction key={index} />;
          })}
      </div> */}

      <div style={{ textAlign: "center" }}>
        {/* <!-- Start container for logo --> */}
        <table
          align="center"
          style={{
            textAlign: "center",
            verticalAlign: "top",
            width: "600px",
            maxwidth: "600px",
            height:'74px',
            backgroundColor: "#002C3F",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  // width: "596px",
                  verticalAlign: "top",
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                {/* <!-- Your logo is here --> */}
                  <img
                    style={{
                      backgroundColor: "#ffffff",
                      width: "182.63px",
                      height: "42px",
                      textAlign: "center",
                    }}
                    alt="Logo"
                    // src="https://cginfinity.com/wp-content/uploads/2022/04/cgi-logo.svg"
                    src={CgDarkLogo}
                    align="center"
                  />
              </td>
            </tr>
          </tbody>
        </table>



        <div
        className="template-class"
        style={{ width: "600px", backgroundColor: bgc }}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        onClick={() => {
          setEditorBtn("f");
          setFormatting("bgcolor");
        }}
      >
        {arr &&
          arr?.map((item, index) => {
            if (item === "Content") return <Content key={index} />;
            if (item === "Image") return <Images key={index} />;
            return <CallToAction key={index} />;
          })}
      </div>



        <table
          align="center"
          style={{
            textAlign: "center",
            verticalAlign: "top",
            width: "600px",
            maxWidth: "600px",
            backgroundColor: "#1E1E1E",
          }}
          width="600"
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: "596px",
                  verticalAlign: "top",
                  // paddingLeft: "30px",
                  // paddingRight: "30px",
                  // paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                {/* <p
                                    style={{
                                        fontSize: "20px",
                                        lineHeight: "24px",
                                        fontFamily: "Helvetica, Arial, sans-serif",
                                        fontWeight: "600",
                                        marginBottom: "5px",
                                        textDecoration: "none",
                                        color: "#002c3f"

                                    }}
                                >
                                    Contact Us
                                </p> */}
                {/* <p
                                    style={{
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        fontFamily: "Helvetica, Arial, sans-serif",
                                        marginBottom: "2px",
                                        marginTop: "2px",
                                        textDecoration: "none",
                                        color: "#000000"
                                    }}
                                >
                                    +14699167730
                                </p> */}
                {/* <a href="mailto:info@cginfinity.com"
                                ><p
                                    style=
                                    {{
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        marginBottom: "2px",
                                        marginTop: "2px",
                                        fontFamily: "Helvetica, Arial, sans-serif",
                                        textDecoration: "none",
                                        color: "#000000"
                                    }}
                                >
                                        info@cginfinity.com
                                    </p></a
                                > */}

                <div
                  style={{
                    color: "#ffffff",
                    marginTop: "24px",
                    alignContent: "center",
                  }}
                >
                  <div style={{display:'flex', gap:'16px', justifyContent:'center'}}>
                    <a
                      // href="https://www.instagram.com/cginfinityinc/"
                      href="https://www.linkedin.com/company/cginfinity"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="data:image/png;base64,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"
                        width="32px"
                        height="32px"
                        alt="LinkedIn Icon"
                      />
                    </a>

                    <a
                      // href="https://www.facebook.com/cginfinityinc/"
                      href="https://www.youtube.com/CGInfinityInc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAinSURBVHgB7Z3/Wds8EMcvPO//pBNgJgAmqJmgMAEwQekE0AmACaATQCdIOgFhgpgJAhPo1TeSgxNsbMcnW7Lv8zwXJykNQXe+O51+jaiHKKJIXw7JXCG7meeUuW6SaHnLyKt9b4bXI3PtFSMKHKvsmIzCv5N5PSY3wChgBC9apng+MgYitIVW+FhLrOVWy1yL6lietdwrY4SCK6zS0dALD5ReJAv7HU9IaI5uyEMtV54rvUjm1hgiEuph7/ZJIIquIhMlIaKcHio+zyuck7DOABQvhpCHboRoYIrflEc1xBxBma7cVSBKakOulLvahV8o4+7ngSimTZmrPieKytz1N4Eoo0u5oRZppRSsTJybkPSJq5JoOW6jzLxDjtHKP9OXZxLl1yEiU2K+pJARl88iVxQaysT7x4Aa2XdBWzrpJbDnAMq4r0cyw7MCHwk5yAtYDUBJsueahJiNgM0ARPmtkRCjEbAYgCi/dRJiMoLGBiDK74yEGIygkQHYzFT6+N2B+YkwgjfakqaFoHsS5XcJelr31ICtDcAWKGTuW/ecqJbHD6D8S08LJkOWM9qC2jmATfoQ94cxfh0OyAOO6iaF2xjAnCTu+0pCxggqJ4W1cgAbayISfCWimoNHlT2AMrNVJiSEALqG0yo/WMkApL8fHAlVDAVVQ8BPEuWHREQVJ5OUegCb9c9JCJH9sl5BFQ/QbpFB4OS+7Ae+NABlVq9ItS9cYlUy1fzLENBZnz+KPq7j8boAXHd3P/980etNsp+VJUmK/8/bm5Gi997fP56n72/KV5/vjqlW8nHRPxYagL37S13I1kABcWwEyjw8NO+VKS90YAizmbm+vJjnELfGUblbuEK5Wr0Tx0pNJkrYAG2CtnEzTjCpq/yY/UuMx0rd3CihBLQR2orfCOI6BjBhV/7zsxIqgrbiN4JJnq5HOcqPiLvfP5mYWC9UZzrVkfuYmDna3Oourxt4TZxcXYnytwFtdn1NzHzq0ud5ANz9EXGAjB53f98ze1egp7C//7n72eATtcK/Zd9Y8wDKWEhEXMCKRfnbg27x+TkxMt5MBjdDAG/V7+yMhIb8+EHMrCllLQRo61gQ51SvxSK/4iZUB+7/2zdiBPFkPx0qXnkA6xr4tJVW9oRmoA0PWdfZQimrD8yGgHPiRGI/H7wGAFahPmsAB8QJ/5ceLvw30yqxWBqA+thfnw/xAHzs7REzkdX5ygPw3678X3q4oBbAT4yHnewLViQB5MPNzbS86VMD4I3/wIcQ8PTEWUXrDjc303c8uAsBPniAuzs9/HFE9OcPBY2btozwsKOM8nl/g08JIGbaoJyKOPrvHwULf5uiLBzBA/Cbl4/xH4aAsYmLi67m5vnIIQygn+6/iIcH4w1+/w7LENx41aUHiGiIYKwdEy5Czw+a4cgAQikCZfODv3/Ja9y06S4MYJeGDgzh5GSI+cG+myQwVNL84NevoRjCHgyAdbB5SehVwNtb//IDR20KA+CvM/ahDJzND3wwBEfFIOcHRgRPagg9zQ/EAKqS5gc9MwQxgLoUrSwOlP9IqAbKyPf3vZvoIgZQBhQOxfd0dRNCwCtx05cx+JsbovncD+W7adPEjQcI3QCwnvHy0q9Y76ZN32AAWAsoE/hAT+P8F7y7CQGhgSnsWMQ6vIWsbzAAft8SSj85jfPPz/4neW7adJkDJDQ0oPifP/2L8+3jyAB89gChxnk3SeAMIWBGQwCKDznOO+oF7Ni9ZHk/3ScPkMb50Pcp4m9T7BYyS+sACXFPDoXFdh1fEeeh9NDjvJu7/wUP6WAQ/4R5bJ3aNZjm1Yckz1H8x8NO9gUrc96d5gbNq5NSzRQPO9kXrLxKfYkN1x7AJoK8GpPVN3zM2B30zOp8bULIE3EiBsCHAwNIn7gzAP4vPVz4b6bVLNfVNnHKrA9A5ibbxPnGaESMrO0WuvIAdt843vVR4gWaw7+kfc3Tb04KfSBOfF9vFwKYjczLmlLyNovm2y0U7h/1AAkD24HYjxVKfDlAohW+tuNU3rTwO+IC/Veswxe2AyuSeBPA6eYbeR4AYwLPxIkcGFEfxH7+Nvt0kOQnD2BPlJgSJ6enkhDWAW2FcQxe/o2qzv1Qrg6Nur1VQgloo64PjbJGMHHwJczRaNOpEjZAm7g7Nm5epOevDo6Mqe55c3XArBzMxk0FPYWDg/73GDBIlj08Elf3G1pejAq6+GVHx8IAYmqbvCNjN4+OzXueUraAM2/rVSigbA7DZkZe9LroyNhuxkc+df2ylBlATC69gNAGhXc/KC0yd+YFBA7+jkrOgapiABFxHyQptMV+WdevdIMI+wFSzguP31X6/ZXGGe1QMaqDEQkhkJA5Jra0a1Fpixj7QRckhMJFFeWDynsEjUx5mG+gSHDF3ahGKb/WVBMJBd7zZZ8/j1q7hFm3ogeoHSwpF5qS6qYWtbeJs5nlLxJ8o1LWz4YOB7eOBi5E6ss1bUmj6ab6Fz8S94njQl2etBJPaUuaGgCSwgm5OHZGqEJCFfv7RTTaKtb+4lMa4jYz3ZNoOR41TMgbeYAUO14ATxCR0AYJGeUn1BAWAwBiBK2REJPyAZsBADEC5yTEqHzAul28/WIoRiQkcINp1azKB+znBdgveETcq42HDdqSXfnOQYHC8wJKCHJLIaP/gEsti4Aa3BdBm52TY1iTwCKUJId1Sagll9/KmUGjj2FKmU9QDtroKLh4XxVllp3NA3HDbcpcDWX2tf5Dx0oSxKygLYa3iYL+oyMtT4EoyYVMleRFS0M4V8MKC1B8TMI6AzAEUXwVlEkUpwEpVhTvAmVyhIdAvQIKOUjuZLIMB7ohT6wx+FxVXNjvGJPgDmVCBBp65oHSE2UmyOI7BdeVa6UU7BJlulFws7G9HpA7RWD61SuZlTfLzbRCr9gFbwB52LgLI8A1sjLOyF7Bf32114Q+zlJKn8/6WJ79H/Oy5cOI2tXRAAAAAElFTkSuQmCC"
                        width="32px"
                        height="32px"
                        alt="Youtube Icon"
                      />
                    </a>

                    <a
                      // href="https://www.linkedin.com/company/cginfinity"
                      href="https://www.facebook.com/cginfinityinc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApBSURBVHgB7Z3PbxvHFce/b9a2pKSWxEMRqkHhTXqrC1g+NilgGjDQFmhhBf0DLBVIj7WMxLJQoJWUSyU5QORrL1bQU1s0lZFDAzRA6UtPLcIAcY813bgRFQMlJQeR5Gh3Mm9JURLFn+LucnY4H4CmftCSuO8778fM2xmCgaSni65/BuMO4PpSuCRoRH3ZBaRbfgW59f+nzEuJEhGV+BlSPhLk56WPnEcoPbmdysEwCAmHjY3TyEiIcfVuLgmCK0GjiACCLKmfnZO+/FiSnxUCucJiKo8EkzgBjE4XRwdPYVySmCCBq41HczxIKXPKY+Tgee8W3k5lkTASI4D0m8UMHOeaGoUTUY3wbql4iDVfevc+X06tIQFoLYAXbxbHPRJXiTCtq9EbI/Pq8mZB3oLOYUJLAVRG+5z6MAMzyKoQsaBjiNBKAAYavgblFXx/oXA7tQpN0EIA5hu+Fn2E0FMBpGdVCSedu+gbwx9FzTWskfBu9DJH6IkAglLujLgOonlYWAnzO8/8O6WVVAkxE7sAyu5e3O11/a4fKiyQP6W8QRYxEpsAeNQPDYg5Vc5Nw9IQdX1WNpbO3kBMxCKAcqwXf7ejvl0Cb3A5jtxAIGLSM1vXSIqPrPE7gVzpOx+9MFOM3FtG6gHGbm2+Y11+l6gEsbA8soCIiEQA5Xjv3JXABCxdw+Xi7jNvKooqIXQBcLyXvviLWiEbhyVEoskLQhWATfaiJnwRhCYAa/y4CFcEoQjAGj9uwhNB1wKwxu8V4Yigq3kAzvat8XsFBcl2YIMu6EoAXOpZ4/cOrrQGzgSrqSfmxAJIz2zO2Tq/9xBh4oVbT9/BCTlRDjCmpiglOSf+pZYIEJgs/Hb4XXRIxwLgpI/n9pPXpNkZw4OE77/s4BX1GBkCzo/xM+HbqeNO89Oif+z506LE1o7Ef/8v8fjQ51ER3NAivIudJoWdC+DW5kNT4z4b/fUfnA6M/srLpxA2LIBfv7+DP/5rD9Eg8zu7/sVOpow7epeVxR0XhvG9bwm8cWUAP/pu+EY/DAusngcJD3IHBk5xb2Xb/QRt/zXcyWPayh4b5K2fDuBvv3w+cuPHBUFOqzCdaff1bQkgqDWDNi5z4Pj+4fXn8fqrZ2AcUtxtd36gLQEEDZwgF4bAcf69Xzyn3HHi741tALnKZm1565YCCKZ6DerefePKGbz1k0EYD9FcYLsWtBQASXPqfR75b6pkr2+QrWcJmwogfbM4acpsH2fffTHyj5JplRA29wBCzMEQ/qxifl8inaY2bCgAHv2mJH4c981N+FrS1As09gCGjH52/X0V9+vRxAvUFUBw+xbIhQHw6Lc09gL1PYDjGDH6efHmx+fNmOHrmgZe4JgAKrVjBgbA07s83WsJyHzzZvFYq/5xD+CLeRjCDw2Z3w8Lh8Sxkv64AAiXYAivfseB5QC1mHe99mtHhsjYTHHClOVeXuyJ2v0/WPfxwYM9/OM/e9UmEJ0hwigng4f3IDgiAAlhTI8fr/FHBRt7+k87yvAeEod0roF3Latw5CoR0VUYQlSNF5985uPKnS+TaXwErWMTh5eKq1ep3PABY/r8zo+FLwAe+T/73ZeR9vZFDYeBwUFUq4GDqyTEJAyC5wDC5jfv7yba+PtI7yDUVwWglHEBBhF2CHiw7uGDf0fVzBkvJA5CfXCVgnv6Ydb9/GFXAH/451cwCHe/WSQQAPmwmzm0gEs+o/CcDD+V/SSJDCxN4ezfJCRkMOhF+RMyKv5HgQnJ3xFIBDO+5RAAGwL6j/L5SYIPZTCp/re0R2Va2BWetMbvV3zfGRckhHX/fQqpMCDUvy4s/YmEy0mgC0tfwgdqClUCjsDSn0i8JFQcsElgv0I4J9T6cAqWvkUlgXQOln7FjfzACIveWAH0OZS+taXdKgd39L5n4N28f32wh5//fhs6YT1AjHBXkW5YAcSIjk0lAlI+giUWtra1i7Z56wFiRLeuIimpxPMAD2GJnM1tqV1XkZoF3rQhICZ0jP9SypIgQuwnVvcjn3ym5a1kKgeQyMMSOY+LGnYVU5AE+nlYIkfHEEBC5IQUyMESOZv6lYDwvL2S4BMmCDYPiBrdPACfMPLkdipXmQeQeVgiQ8cpYDXoP+bn/Ymg+7BEBp8bpBuqBAxCf/nWMJ9sHhAhOnoASZTl57IHcLwsLJGh5SKQ8A48QHDUmJ0RjAzdFoHUGkBu/3i5wzuErMESCbotAhHJasivbhMnyV+DdK5DAx4XJd7+cBfdEPYO4d38PdrdWk5UPWG0uo+KO18c3d12Hppyp/D64lmEydjsU5gA1/8by8PVWwGqISA/nyqp0uAeLEZTG+qPNoQIfxUWo/EljgzyIwLgPWTttLDR5D9fHm7iARDMEN2BxVSytV84JgBH+rYcNBXyFmq/dEwA/1MrRKijFEvCkbi/P/lzmPpdwXWUYkk4ov7xv3UFUDlQIAuLKeQLi2ez9b7R+L4A6wXMgdDQlg0FYL2AMajRP7za6JvN7wyyXiD5NBn9TFMBWC+QbKSPe81GP9P63kDypmBJJOR4061e01IAlWYRGwqSBsmFenV/LW3dHTz4nL+invKwJIX8zk5gs5a0JQBeKrahIEEQTZVWUm0t6rW9P0B5pdAuFOmOVDZqNOlTj442iBgY8udhQ4HO5DeWRlomfofpSACVUHDZ9gzoR2ATZRt0SMdbxHBmKcm7AYtW+LK9rL+WE+0RpH7Rqs0HNEKVfBvLI21l/bWceJOodRVrlNuxzSM9hm1QWByZxwnpapewgSFvSnkCe19h78hv73ZXnnclgKCVnPzXYCuDXpDnpK/der8RXe8TGCQe5ewzD0tcBNf8JElfLaFsFGlFECuhGZ8JbadQK4JYCNX4TKhbxVoRRAff0h228ZnQ9wrmP3BwyLtoS8Tw4Gu5+2wvdOMzpxABwZQx8Fp6dnMekuZgOTHB4k6H8/udEOlu4TxBQVLesGsHnVOe28fURoTGZyLfLn5dTVGqtYOLsHlBJ/B6y8VW/XxhEMt5ARy7CkvDL9n1g9awy9/ZZeOHH+/rEeuBEbx+YKuEhqgKii6zy+92dq8TYj8xhDuLuErgFSxYyqhrUR717XfyhPar0UPSs0WXpFiRoKsImUTsESRxH8KbjMvd1yOSMrBdKm98Ij27NakuBpeLLvqBwPA0X1iKf8TX0lMPUEuYQtDSA+wbfrH3ht9Hq1PDuOzhaoGToeBimQK/F/WeCsvDGZ2Mz/Q0BDSicpEynCPAF/Pq4l1CwsIDT+RIknc8z1l7cvsb2jbNaCmAfSo5wiR/PDazNaFq5AkiuqrrZpaB0XkbNkGr65qN9EZolQO0S3r2aQa+P6nEMK7EcKHea2LLAaR8pIy+Ro5Y29nZy8VZw4eB1h6gEZUQwY9yKek7476UGRYEES5E5SEqaxqPfF9myeEzFk5nC0tDeSSYRArgMJUwwY/q8vOLv/piHGUR8LNbeYweepxr8OP2t8zPVx6l6sd0Ore+mGxj1+Nrse8FxEXT9EoAAAAASUVORK5CYII="
                        width="32px"
                        height="32px"
                        alt="Facebook Icon"
                      />
                    </a>

                    {/* <a
                      // href="https://www.youtube.com/CGInfinityInc"
                      // href="https://www.facebook.com/cginfinityinc/"
                      href="https://www.instagram.com/cginfinityinc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="data:image/png;base64,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"
                        width="32px"
                        height="32px"
                        alt="Instagram Icon"
                      />
                    </a> */}

                    <a
                      href="https://twitter.com/cginfinityinc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="data:image/png;base64,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"
                        width="32px"
                        height="32px"
                        alt="Twitter Icon"
                      />
                    </a>
                  </div>
                </div>
                <a href="https://cginfinity.com/" style={{textDecoration:'none'}}>
                  <p
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontWeight: 500,
                      color: "#ffffff",
                    }}
                  >
                    {/* Thanks, <br /> */}
                    www.cginfinity.com
                  </p>
                </a>
                <p
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 500,
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  {/* Thanks, <br /> */}© 2023 CG Infinity. All rights reserved
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          align="center"
          style={{
            textAlign: "center",
            verticalAlign: "top",
            width: "600px",
            maxWidth: "600px",
            backgroundColor: "#ffffff",
          }}
          width="600"
        >
          <tbody>
            <tr>
              <td style={{ width: "596px", verticalAlign: "top" }} width="596">
                <h1
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "600",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  © 2023 CG Infinity. All rights reserved
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Template;
