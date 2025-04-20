/// <reference types="cypress" />

import getThisSeason from "@/utils/getThisSeason";

describe("Home 페이지 E2E 테스트", () => {
  beforeEach(() => {
    cy.visit("/"); // ✅ 홈페이지 방문
  });

  it("홈페이지가 정상적으로 렌더링 되는지 확인", () => {
    cy.get("h2").should("exist"); // 현재 시즌 제목이 존재해야 함
    cy.get("header").should("exist"); // 헤더가 존재해야 함
    cy.get("footer").should("exist"); // 푸터가 존재해야 함
  });

  it("현재 시즌 텍스트가 올바르게 표시되는지 확인", () => {
    const currentSeason = getThisSeason();
    const expectedSeason = `${currentSeason}-${currentSeason + 1} 시즌`;

    cy.contains(expectedSeason).should("be.visible"); // ✅ 시즌 표시 확인
  });

  it("리그 변경 버튼이 정상적으로 표시되는지 확인", () => {
    cy.get("[data-cy=league-button]").should("be.visible");
  });

  it("리그 테이블이 정상적으로 표시되는지 확인", () => {
    cy.get("[data-cy=league-table]").should("be.visible"); // 리그 테이블 존재 확인
  });

  it("경기 일정이 정상적으로 표시되는지 확인", () => {
    cy.get("[data-cy=schedule-container]").should("be.visible"); // 경기 일정 확인
  });

  it("데이터 로딩 중에는 스켈레톤 UI가 표시되는지 확인", () => {
    cy.get("[data-cy=skeleton]").should("be.visible");
  });
});
