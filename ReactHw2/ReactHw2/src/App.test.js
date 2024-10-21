import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App.jsx"

describe("App test", () => {

        it('test', () => {
            const app = render(<App/>)

            expect(app).toMatchSnapShot()
        })

    }
)