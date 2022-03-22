import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(params: {
    val: number | null;
    hook: [number, (n: number) => void] | null;
}): JSX.Element {
    if (params.hook === null) {
        const [value, setValue] = useState<number>(0);
        if (params.val === null) {
            return (
                <span>
                    <Button onClick={() => setValue(1 + value)}>
                        Add One to
                    </Button>{" "}
                    {value}
                </span>
            );
        } else {
            return (
                <span>
                    <Button
                        onClick={() =>
                            setValue(
                                params.val === null ? 1 : params.val + value
                            )
                        }
                    >
                        {params.val >= 0
                            ? "Add " + params.val + " to "
                            : "Subtract " + params.val + " from "}
                    </Button>{" "}
                    {value}
                </span>
            );
        }
    } else {
        const [value, setValue] = [params.hook[0], params.hook[1]];
        if (params.val === null) {
            return (
                <span>
                    <Button
                        onClick={() =>
                            setValue(
                                params.val === null ? 1 : params.val + value
                            )
                        }
                    >
                        Add {params.val}
                    </Button>
                </span>
            );
        } else {
            return (
                <span>
                    <Button
                        onClick={() =>
                            setValue(
                                params.val === null ? 1 : params.val + value
                            )
                        }
                    >
                        {params.val >= 0
                            ? "Add " + params.val
                            : "Subtract " + params.val}
                    </Button>{" "}
                </span>
            );
        }
    }
}
